import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Spacer,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

const ExpenseList = ({ expenses }) => {
  // Panggil hook warna di awal, sebelum return apapun
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const hoverBgColor = useColorModeValue('purple.50', 'purple.800');
  const textColor = useColorModeValue('purple.700', 'purple.300');
  const dateColor = useColorModeValue('gray.500', 'gray.400');

  if (!expenses || expenses.length === 0) {
    return (
      <Box
        mt={6}
        p={6}
        maxW="480px"
        mx="auto"
        bg={bgColor}
        rounded="2xl"
        boxShadow="xl"
        border="1px solid"
        borderColor={borderColor}
        textAlign="center"
        color="gray.500"
      >
        Belum ada pengeluaran.
      </Box>
    );
  }

  // Urutkan dari terbaru ke terlama
  const sorted = [...expenses].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <VStack
      spacing={4}
      align="stretch"
      mt={6}
      p={6}
      maxW="480px"
      mx="auto"
      bg={bgColor}
      rounded="2xl"
      boxShadow="xl"
      border="1px solid"
      borderColor={borderColor}
    >
      {sorted.map(({ id, description, amount, date }) => (
        <Box
          key={id}
          p={4}
          borderRadius="md"
          boxShadow="sm"
          border="1px solid"
          borderColor={borderColor}
          _hover={{ boxShadow: 'md', bg: hoverBgColor }}
          transition="all 0.2s ease"
        >
          <HStack>
            <Box>
              <Text fontWeight="semibold" fontSize="md" color={textColor}>
                {description}
              </Text>
              <Text fontSize="sm" color={dateColor}>
                {new Date(date).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </Text>
            </Box>
            <Spacer />
            <Badge
              colorScheme="purple"
              fontSize="md"
              fontWeight="bold"
              rounded="full"
              px={3}
              py={1}
              boxShadow="sm"
            >
              Rp {amount.toLocaleString('id-ID')}
            </Badge>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default ExpenseList;
