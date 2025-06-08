import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  useBreakpointValue,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import BottomBar from './components/BottomBar';
import SavingsTarget from './components/SavingsTarget';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import WishList from './components/WishlistPage';
import DashboardPage from './components/Dashboard';

// Dummy pages for navigation example
const Dashboard = () => <DashboardPage />; 
const Tabungan = () => (
  <>
    <Heading mb={4}>Tabungan (Savings)</Heading>
    <SavingsTarget />
  </>
);

const Pengeluaran = () => {
  // State pengeluaran di dalam page ini supaya ExpenseForm dan ExpenseList sinkron
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [newExpense, ...prev]);
  };

  return (
    <>
      <Heading mb={4}>Pengeluaran (Expenses)</Heading>
      <ExpenseForm onAdd={handleAddExpense} />
      <Divider my={4} />
      <ExpenseList expenses={expenses} />
    </>
  );
};

const Wishlist = () => <WishList />; // Pakai komponen WishlistPage asli

const App = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const rawIsMobile = useBreakpointValue({ base: true, md: false });
  const isMobile = hasMounted ? rawIsMobile : false;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <Router>
      <Flex minH="100vh" bg="gray.50">
        {!isMobile && <Sidebar />}

        <Box
          flex="1"
          ml={{ md: '240px' }}
          mb={{ base: '60px', md: 0 }}
          p={{ base: 4, md: 6 }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tabungan" element={<Tabungan />} />
            <Route path="/pengeluaran" element={<Pengeluaran />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </Box>

        {isMobile && <BottomBar />}
      </Flex>
    </Router>
  );
};

export default App;
