import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps {}

const InputField = (props: Props) => {
    const { style, ...rest } = props;

    return (
        <TextInput
            style={[
                {
                    backgroundColor: '#ffffffaa',
                    borderRadius: 8,
                    paddingHorizontal: 12,
                    paddingVertical: 10,
                    marginBottom: 12,
                    width: '100%',
                },
                style,
            ]}
            placeholderTextColor="#b0b0b0"
            {...rest}
        />
    );
};

export default InputField;
