import { RootTabScreenProps } from '../types';
import { Box, Heading, HStack, Stack, Text } from 'native-base';

export default function ProfileScreen({
  navigation,
}: RootTabScreenProps<'Profile'>) {
  return (
    <Box alignItems='center'>
      <Stack p='4' space={3}>
        <Stack space={2}>
          <Heading size='md' ml='-1'>
            Renault Winery
          </Heading>
          <Text
            fontSize='xs'
            _light={{
              color: 'violet.500',
            }}
            _dark={{
              color: 'violet.400',
            }}
            fontWeight='500'
            ml='-0.5'
            mt='-1'>
            72 Bremen Ave, Egg Harbor City, NJ 08215
          </Text>
        </Stack>
        <Text fontWeight='400'>
          https://www.renaultwinery.com/?utm_source=organic&utm_medium=social&utm_campaign=1seo_gmb
        </Text>
        <HStack alignItems='center' space={4} justifyContent='space-between'>
          <HStack alignItems='center'>
            <Text
              color='coolGray.600'
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight='400'>
              (609) 798-7058
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
}
