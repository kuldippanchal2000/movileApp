import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './style';

const SearchBox = ({
  text,
  onSearch,
}: {
  text: string;
  onSearch: (text: React.SetStateAction<string>) => void;
}) => {
  const [input, setInput] = useState('');

  const handleChange = (value: React.SetStateAction<string>) => {
    setInput(value);
    onSearch(value);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={text}
        value={input}
        style={styles.text}
        onChangeText={handleChange}
      />
    </View>
  );
};

export default SearchBox;
