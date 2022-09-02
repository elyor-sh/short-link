import React from 'react';
import {Avatar, Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

interface AuthFormProps {
    title: string
    handleSubmit: () => void
    username: string
    password: string
    setUserName: (p: string) => void
    setPassword: (p: string) => void
}

const AuthForm: React.FC<AuthFormProps> = (
    {
        title,
        handleSubmit,
        username,
        password,
        setPassword,
        setUserName
    }) => {

    const handleKeyPress = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if(e.code === 'Enter'){
            e.preventDefault()
            handleSubmit()
        }
    }

    const handleSubmitAuth = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSubmit()
    }

    return (
        <>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {title}
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onKeyPress={handleKeyPress}
                        onSubmit={handleSubmitAuth}
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Логин"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {title}
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </>
    );
};

export {AuthForm}
