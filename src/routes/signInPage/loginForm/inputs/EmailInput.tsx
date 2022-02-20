// mui
import { TextField } from '@mui/material';
// react-hook-form
import { useFormContext, Controller } from 'react-hook-form';

export const EmailInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name="email"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            inputProps={{
              autoComplete: 'off',
            }}
            {...field}
            type="email"
            sx={{ marginTop: 5 }}
            variant="standard"
            label="email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email ? errors.email?.message : ''}
          />
        )}
      />
    </>
  );
};
