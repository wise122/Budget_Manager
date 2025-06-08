import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  IconButton,
  useToast,
  Divider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const STORAGE_KEY = 'jkt48_wishlist';

const WishlistPage = () => {
  const [items, setItems] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const toast = useToast();

  // Load wishlist dari localStorage saat komponen mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // Simpan wishlist ke localStorage setiap ada perubahan items
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    if (!newName.trim()) {
      toast({
        title: 'Nama item kosong',
        description: 'Masukkan nama item terlebih dahulu',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (!newPrice || parseFloat(newPrice) <= 0) {
      toast({
        title: 'Harga tidak valid',
        description: 'Masukkan harga lebih dari 0',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setItems([
      { id: Date.now(), name: newName.trim(), price: parseFloat(newPrice) },
      ...items,
    ]);
    setNewName('');
    setNewPrice('');
    toast({
      title: 'Wishlist ditambahkan',
      status: 'success',
      duration: 1500,
      isClosable: true,
    });
  };

  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
    toast({
      title: 'Item dihapus dari wishlist',
      status: 'info',
      duration: 1500,
      isClosable: true,
    });
  };

  return (
    <Box maxW="600px" mx="auto" p={6} bg="white" rounded="xl" boxShadow="lg">
      <Heading mb={6} color="purple.600" textAlign="center">
        Wishlist JKT48 🎤✨
      </Heading>

      <VStack spacing={3} mb={6} align="stretch">
        <Input
          placeholder="Nama item wishlist"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          focusBorderColor="purple.400"
        />
        <NumberInput
          value={newPrice}
          onChange={(value) => setNewPrice(value)}
          min={1}
          precision={0}
          step={5000}
          focusBorderColor="purple.400"
        >
          <NumberInputField placeholder="Harga (Rp)" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Button colorScheme="purple" onClick={handleAdd}>
          Tambah Wishlist
        </Button>
      </VStack>

      <Divider mb={4} />

      <VStack spacing={3} align="stretch">
        {items.length === 0 && (
          <Text textAlign="center" color="gray.500">
            Wishlist masih kosong
          </Text>
        )}
        {items.map(({ id, name, price }) => (
          <HStack
            key={id}
            p={3}
            bg="purple.50"
            rounded="md"
            justifyContent="space-between"
            boxShadow="sm"
          >
            <Box>
              <Text fontWeight="medium">{name}</Text>
              <Text fontSize="sm" color="purple.600">
                Rp {price.toLocaleString('id-ID')}
              </Text>
            </Box>
            <IconButton
              icon={<CloseIcon />}
              size="sm"
              colorScheme="red"
              aria-label="Hapus item"
              onClick={() => handleRemove(id)}
            />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default WishlistPage;
