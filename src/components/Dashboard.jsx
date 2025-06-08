import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  VStack,
  Button,
} from '@chakra-ui/react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', savings: 500000, expenses: 300000 },
  { month: 'Feb', savings: 700000, expenses: 200000 },
  { month: 'Mar', savings: 600000, expenses: 250000 },
  { month: 'Apr', savings: 800000, expenses: 400000 },
  { month: 'Mei', savings: 900000, expenses: 350000 },
  { month: 'Jun', savings: 750000, expenses: 300000 },
];

const Dashboard = () => {
  return (
    <Box>
      <Heading mb={6} color="purple.700">
        Dashboard
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
        <Stat
          px={4}
          py={5}
          shadow="md"
          border="1px solid"
          borderColor="purple.300"
          rounded="md"
          bg="purple.50"
        >
          <StatLabel>Total Tabungan</StatLabel>
          <StatNumber>Rp 4.25 Juta</StatNumber>
          <StatHelpText>Per 6 bulan terakhir</StatHelpText>
        </Stat>

        <Stat
          px={4}
          py={5}
          shadow="md"
          border="1px solid"
          borderColor="purple.300"
          rounded="md"
          bg="purple.50"
        >
          <StatLabel>Pengeluaran</StatLabel>
          <StatNumber>Rp 1.8 Juta</StatNumber>
          <StatHelpText>Per 6 bulan terakhir</StatHelpText>
        </Stat>

        <Stat
          px={4}
          py={5}
          shadow="md"
          border="1px solid"
          borderColor="purple.300"
          rounded="md"
          bg="purple.50"
        >
          <StatLabel>Wishlist Items</StatLabel>
          <StatNumber>12 Items</StatNumber>
          <StatHelpText>Jumlah item di wishlist</StatHelpText>
        </Stat>
      </SimpleGrid>

      <Box
        p={6}
        bg="white"
        shadow="md"
        rounded="md"
        border="1px solid"
        borderColor="gray.200"
        mb={8}
        height={{ base: '300px', md: '400px' }}
      >
        <Heading size="md" mb={4} color="purple.600">
          Grafik Tabungan vs Pengeluaran
        </Heading>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="savings" fill="#805AD5" name="Tabungan" />
            <Bar dataKey="expenses" fill="#D53F8C" name="Pengeluaran" />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <VStack spacing={4} maxW="480px" mx="auto" align="stretch">
        <Button colorScheme="purple" size="lg" rounded="md">
          Tambah Tabungan
        </Button>
        <Button colorScheme="purple" variant="outline" size="lg" rounded="md">
          Tambah Pengeluaran
        </Button>
        <Button colorScheme="purple" variant="ghost" size="lg" rounded="md">
          Lihat Wishlist
        </Button>
      </VStack>
    </Box>
  );
};

export default Dashboard;
