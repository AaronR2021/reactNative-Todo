A basic Todo Application with 3 screens

### What I learnt when making this app
- quick lookup

- 
'''
import { useFocusEffect } from '@react-navigation/native';

  useFocusEffect(
    React.useCallback(() => {
      // Function to run when screen comes into focus
      console.log('MyScreen is focused');

      // Clean up function
      return () => {
        // Function to run when screen goes out of focus
        console.log('MyScreen is unfocused');
      };
    }, [])
  );
'''