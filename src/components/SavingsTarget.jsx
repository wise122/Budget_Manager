import React, { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
  Text,
  useToast,
  InputGroup,
  InputRightElement,
  Flex,
} from '@chakra-ui/react';

const LOCAL_STORAGE_KEY = 'ssk-savings';
const HISTORY_KEY = 'ssk-history';

const SavingsTarget = () => {
  const [target, setTarget] = useState(1000000);
  const [current, setCurrent] = useState(0);
  const [inputAmount, setInputAmount] = useState('');
  const [history, setHistory] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const { target: savedTarget, current: savedCurrent } = JSON.parse(savedData);
      if (savedTarget) setTarget(savedTarget);
      if (savedCurrent) setCurrent(savedCurrent);
    }

    const savedHistory = localStorage.getItem(HISTORY_KEY);
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ target, current }));
  }, [target, current]);

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  const handleAddSavings = () => {
    const amount = parseFloat(inputAmount);
    if (!amount || amount <= 0) {
      toast({
        title: 'Input tidak valid',
        description: 'Masukkan angka lebih besar dari 0',
        status: 'error',
        duration: 2500,
        isClosable: true,
      });
      return;
    }

    if (current + amount > target) {
      toast({
        title: 'Melebihi target',
        description: 'Jumlah tabungan melebihi target yang ditetapkan',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setCurrent(current + amount);
    setHistory([...history, { amount, timestamp: Date.now() }]);
    setInputAmount('');
  };

  const progress = Math.min((current / target) * 100, 100);

  return (
    <Box
      mb={8}
      p={6}
      maxW="600px"
      mx="auto"
      borderRadius="2xl"
      bgGradient="linear(to-br, purple.50, pink.50)"
      boxShadow="xl"
    >
      <Text fontSize="2xl" fontWeight="extrabold" mb={4} textAlign="center" color="purple.700">
        🎯 Target Tabungan SSK
      </Text>

      <FormControl mb={6}>
        <FormLabel fontWeight="semibold" color="purple.600">Target (Rp)</FormLabel>
        <Input
          type="number"
          value={target}
          min={0}
          onChange={(e) => setTarget(Math.max(0, parseFloat(e.target.value) || 0))}
          placeholder="Masukkan target tabungan"
          focusBorderColor="purple.400"
          bg="white"
          borderRadius="md"
          boxShadow="sm"
        />
      </FormControl>

      <Stat
        mb={6}
        px={4}
        py={3}
        bg="white"
        borderRadius="xl"
        boxShadow="md"
        textAlign="center"
      >
        <StatLabel fontWeight="medium" color="gray.600">Terkumpul</StatLabel>
        <StatNumber fontSize="3xl" fontWeight="bold" color="purple.600">
          Rp {current.toLocaleString()}
        </StatNumber>
      </Stat>

      <Progress
        colorScheme="purple"
        value={progress}
        mb={6}
        borderRadius="full"
        height="20px"
        sx={{
          '& > div': {
            transition: 'width 0.6s ease',
          },
        }}
      />

      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel fontWeight="semibold" color="purple.600">Tambah Tabungan</FormLabel>
          <InputGroup>
            <Input
              type="number"
              placeholder="Misal: 50000"
              value={inputAmount}
              min={0}
              onChange={(e) => setInputAmount(e.target.value)}
              focusBorderColor="purple.400"
              bg="white"
              borderRadius="md"
              boxShadow="sm"
            />
            <InputRightElement width="6.5rem">
              <Button
                colorScheme="purple"
                h="1.75rem"
                size="sm"
                onClick={handleAddSavings}
                isDisabled={!inputAmount || parseFloat(inputAmount) <= 0}
                _hover={{ bg: 'purple.700' }}
              >
                Tambah
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </VStack>

      {history.length > 0 && (
        <Box mt={8}>
          <Text fontWeight="bold" fontSize="lg" mb={2} color="purple.700">Riwayat Tabungan</Text>
          <VStack align="stretch" spacing={2}>
            {history
              .slice()
              .reverse()
              .map((entry, idx) => (
                <Flex
                  key={idx}
                  justify="space-between"
                  p={2}
                  bg="white"
                  borderRadius="md"
                  boxShadow="sm"
                >
                  <Text color="gray.700">+ Rp {entry.amount.toLocaleString()}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {new Date(entry.timestamp).toLocaleString()}
                  </Text>
                </Flex>
              ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default SavingsTarget;
