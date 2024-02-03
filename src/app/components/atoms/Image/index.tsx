import React from 'react';
import styled from 'styled-components';

const Img = styled.img.attrs(props => ({
  className: `flex items-center justify-center object-cover ${props.className}'`,
  src: props.src,
  alt: props.alt || 'avatar-img',
  title: props.title,
  height: props.height,
  width: props.width
}))``;

interface Props {
  fallbackSrc?: string;
  src: string;
  className?: string;
  alt: string;
  title?: string;
  height: number;
  width: number;
}

export default function Images({ fallbackSrc, src, className, alt, title, height, width }: Props) {
  return <Img src={src || fallbackSrc} className={className} title={title} alt={alt} height={height} width={width} />;
};