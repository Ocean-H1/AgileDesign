import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from '../index';
// import { fireEvent } from '@testing-library/react';
// import { jest } from '@jest/globals';

test('Alert component should render correct message', () => {
    const message = 'This is an alert message';
    render(<Alert message={message} />);
    const alertMessage = screen.getByText(message);
    expect(alertMessage).toBeInTheDocument();
});

// test('Close button in Alert component should call onClose function', () => {
//     const onCloseMock: jest.Mock<void, []> = jest.fn();
//     const message: string = 'This is an alert message';
//     render(<Alert message={message} onClose={onCloseMock} />);
//     const closeButton = screen.getByText('Close');
//     fireEvent.click(closeButton);
//     expect(onCloseMock).toHaveBeenCalledTimes(1);
// });