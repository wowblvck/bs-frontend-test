import { Card, Skeleton, SkeletonText, Stack } from '@chakra-ui/react';

export const SkeletonItem = () => {
  return (
    <Card width="full" bg="white" borderRadius={20} p={4}>
      <Stack
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems="center"
        gap={['20px', '40px']}
      >
        <Stack direction="column" spacing={7} width="full">
          <Skeleton
            height={25}
            width="full"
            maxW={280}
            borderRadius={6}
          ></Skeleton>
          <Skeleton
            height={50}
            width="full"
            maxW={350}
            borderRadius={6}
          ></Skeleton>
          <Skeleton
            height={30}
            width="full"
            maxW={800}
            borderRadius={6}
          ></Skeleton>
        </Stack>

        <SkeletonText
          width="full"
          maxW={130}
          noOfLines={1}
          spacing="4"
          skeletonHeight="10"
        ></SkeletonText>
      </Stack>
    </Card>
  );
};
