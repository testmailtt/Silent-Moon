import chalk from 'chalk';
import { AsyncStorage } from 'react-native';

export const setStorageItem = (key, value) => {
  try {
    console.log(chalk.blue(`SET STORAGE ${key}`), value);
    return AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(chalk.red.bold(error));
    throw error;
  }
};

export const getStorageItem = async (key) => {
  try {
    console.log(chalk.magenta(`GET STORAGE ${key}`));

    const result = await AsyncStorage.getItem(key);

    console.log(chalk.bold(result));
    return result;
  } catch (error) {
    console.log(chalk.red.bold(error));
    throw error;
  }
};

export const removeStorageItem = (key) => {
  try {
    console.log(chalk.red(`REMOVE STORAGE ${key}`));
    return AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(chalk.red.bold(error));
    throw error;
  }
};
