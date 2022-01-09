import { FC } from 'react';
import styled from 'styled-components';

interface ImageProps {
  src: string;
  onClick?: () => void;
  alt?: string;
}

const Image: FC<ImageProps> = ({ src, onClick, alt }) => (
  <ImageWrapper src={src} onClick={onClick} alt={alt ?? ''}></ImageWrapper>
);

export default Image;

const ImageWrapper = styled.img<Omit<ImageProps, 'onClick'>>``;
