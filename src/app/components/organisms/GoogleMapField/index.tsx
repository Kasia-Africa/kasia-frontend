import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import styled from 'styled-components';
import useOnclickOutside from "react-cool-onclickoutside";
import InputWithIcon from "@app/components/molecules/InputWithIcon";

const GoogleMapWrapper = styled.div.attrs(({className})=> ({
  className: `${className || ''}`,
}))`
  
  ul {
    position: absolute;
    background-color: ${({ theme }) => theme.color?.white};
    color: ${({ theme }) => theme.color?.black};
    border: 1px solid #ccc;
    padding: 10px 0;
    margin-top: 5px;
    width: 100%;
    overflow-y: hidden;
    max-height: 300px;
    box-shadow: -2px 5px 5px 0px rgba(151, 151, 151, 0.65);

    li {
      margin: 10px 0;
      border-bottom: 1px solid ${({ theme }) => theme.color?.grey};
      padding: 10px;

      &:last-of-type {
        border-bottom: 0;
      }

      span {
        font-weight: 400;
        font-size: 0.85rem;
      }
    }
  }
`;

const GoogleMapField = ({ onChange, propValue }: any) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: 'ng' }
    },
    debounce: 300,
    cache: 86400,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  

  const handleInput = (e: any) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    () => {
      
      setValue(description, false);
      onChange(description);

      clearSuggestions();
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("Coordinates: ", { lat, lng });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <span>{main_text + ' ' + secondary_text}</span>
        </li>
      );
    });

  return (
    <GoogleMapWrapper className="relative" ref={ref}>
      <InputWithIcon
        value={value || propValue }
        disabled={!ready}
        onChange={handleInput}
        placeholder='Delivery Address...'
        autoComplete="off"
        iconDataUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='20' fill='none'%3E%3Cpath fill='%2339B54A' fill-rule='evenodd' d='M.195 6.863C.195 3.069 3.238 0 7.001 0c3.762 0 6.805 3.069 6.805 6.863 0 5.147-6.805 12.745-6.805 12.745S.195 12.01.195 6.863Zm4.375 0A2.442 2.442 0 0 0 7 9.313a2.442 2.442 0 0 0 2.431-2.45 2.442 2.442 0 0 0-2.43-2.451 2.442 2.442 0 0 0-2.43 2.45Z' clip-rule='evenodd'/%3E%3C/svg%3E"
      />
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </GoogleMapWrapper>
  );
};


export default GoogleMapField;