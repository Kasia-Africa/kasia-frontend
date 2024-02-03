import FontFaceObserver from 'fontfaceobserver';

const Font = (): void => {
    const poppins = new FontFaceObserver('Poppins');

    poppins
        .load()
        .then(() => {
            console.log('Font: Poppins installed.');
        })
        .catch((err) => console.log('err', err));
};

export default Font;