import React from 'react';
import {
  Box,
  HStack,
  IconButton,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiHome, FiDollarSign, FiList, FiHeart } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const buttons = [
    { icon: FiHome, label: 'Dashboard', to: '/dashboard' },
    { icon: FiDollarSign, label: 'Tabungan', to: '/tabungan' },
    { icon: FiList, label: 'Pengeluaran', to: '/pengeluaran' },
    { icon: FiHeart, label: 'Wishlist', to: '/wishlist' },
  ];

  const bgColor = useColorModeValue('white', 'gray.800');
  const activeBg = useColorModeValue('purple.600', 'purple.400');
  const activeColor = useColorModeValue('white', 'gray.900');

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg={bgColor}
      borderTop="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      shadow="lg"
      zIndex={20}
      py={2}
      px={6}
    >
      <HStack justify="space-around" maxW="480px" mx="auto">
        {buttons.map(({ icon: Icon, label, to }) => {
          const isActive = location.pathname === to;

          return (
            <Tooltip key={to} label={label} placement="top" hasArrow>
              <IconButton
                icon={<Icon />}
                aria-label={label}
                variant="ghost"
                size="lg"
                fontSize="24px"
                color={isActive ? activeColor : 'gray.500'}
                bg={isActive ? activeBg : 'transparent'}
                _hover={{
                  bg: isActive ? activeBg : 'purple.100',
                  color: isActive ? activeColor : 'purple.600',
                  transform: 'scale(1.2)',
                  transition: 'all 0.2s ease-in-out',
                }}
                _active={{
                  transform: 'scale(0.95)',
                }}
                onClick={() => navigate(to)}
                aria-current={isActive ? 'page' : undefined}
                rounded="full"
                p={3}
                transition="all 0.15s ease"
              />
            </Tooltip>
          );
        })}
      </HStack>
    </Box>
  );
};

export default BottomBar;
