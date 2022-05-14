import NextImage from 'next/image';
import { Box, chakra } from '@chakra-ui/react';

const ChakraNextImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader ',
    ].includes(prop),
});

export default function Image({
  // Next Image props
  src,
  width,
  height,
  alt,

  // Everything else
  ...rest
}) {
  return (
    <Box pos="relative" cursor="pointer" {...rest}>
      <ChakraNextImage
        w="auto"
        h="auto"
        width={width}
        height={height}
        // placeholder="blur"
        // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(60, 60))}`}
        src={src}
        alt={alt}
      />
    </Box>
  );
}
