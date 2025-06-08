import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  useToast,
  Box,
  Text,
} from '@chakra-ui/react';

const ExpenseForm = ({ onAdd }) => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!desc.trim() || !amount || parseFloat(amount) <= 0) {
      toast({
        title: 'Input tidak valid',
        description: 'Mohon isi deskripsi dan jumlah > 0',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newExpense = {
      id: Date.now(),
      description: desc,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };

    onAdd(newExpense);
    setDesc('');
    setAmount('');

    toast({
      title: 'Pengeluaran ditambahkan',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box
      p={6}
      maxW="480px"
      mx="auto"
      bg="white"
      rounded="2xl"
      boxShadow="xl"
      border="1px solid"
      borderColor="gray.200"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={6} color="purple.700" textAlign="center">
        Tambah Pengeluaran Baru
      </Text>

      <form onSubmit={handleSubmit}>
        <VStack spacing={5} align="stretch">
          <FormControl isRequired>
            <FormLabel fontWeight="semibold" color="purple.600">
              Deskripsi
            </FormLabel>
            <Input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Misal: Beli CD Pajama Drive"
              focusBorderColor="purple.400"
              rounded="md"
              boxShadow="sm"
              _placeholder={{ color: 'gray.400', fontStyle: 'italic' }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontWeight="semibold" color="purple.600">
              Jumlah (Rp)
            </FormLabel>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Misal: 120000"
              focusBorderColor="purple.400"
              rounded="md"
              boxShadow="sm"
              _placeholder={{ color: 'gray.400', fontStyle: 'italic' }}
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="purple"
            size="lg"
            fontWeight="bold"
            rounded="full"
            boxShadow="md"
            _hover={{ bg: 'purple.600', boxShadow: 'lg' }}
            transition="all 0.2s ease"
          >
            Tambah Pengeluaran
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ExpenseForm;
