import { 
    InputContainer,
    StyledInput,
    StyledButton
} from './TodoInput.style';

const TodoInput = () => {
    return (
        <InputContainer>
            <StyledInput placeholder="New Todo..." />
            <StyledButton>
                <div>➤</div>
            </StyledButton>
        </InputContainer>
            
    );
};

export default TodoInput;

// FEEFE5
