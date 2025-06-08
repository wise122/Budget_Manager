import React from 'react';
import { Box, VStack, Text, HStack, Icon } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiDollarSign, FiList, FiHeart } from 'react-icons/fi';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: FiHome },
  { to: '/tabungan', label: 'Tabungan', icon: FiDollarSign },
  { to: '/pengeluaran', label: 'Pengeluaran', icon: FiList },
  { to: '/wishlist', label: 'Wishlist', icon: FiHeart },
];

const Sidebar = () => {
  return (
    <Box
      as="nav"
      w="260px"
      h="100vh"
      position="fixed"
      top={0}
      left={0}
      bg="purple.700"
      color="white"
      p={8}
      boxShadow="lg"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Logo / Brand */}
      <Box mb={10}>
        <Text fontSize="3xl" fontWeight="extrabold" letterSpacing="wide" mb={6}>
          Budget Manager
        </Text>

        <VStack spacing={4} align="stretch">
          {links.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                padding: '10px 15px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? '#00E5FF' : 'white',
                backgroundColor: isActive ? 'rgba(0, 229, 255, 0.1)' : 'transparent',
                transition: 'all 0.3s ease',
              })}
              end
            >
              <Icon as={icon} boxSize={5} mr={3} />
              {label}
            </NavLink>
          ))}
        </VStack>
      </Box>

      {/* Footer Text / Info */}
      <Box fontSize="sm" opacity={0.6} textAlign="center" pt={4}>
        © 2025 Budget Manager
      </Box>
    </Box>
  );
};

export default Sidebar;
