import { Stack } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

export function TitleSkeleton() {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} mt={3.75} spacing={2}>
            <Skeleton
                variant="rectangular"
                width={190}
                height={243}
                animation="wave"
                sx={{ bgcolor: 'rgba(97, 82, 82, 0.452)' }}
            />
            <Stack justifyContent='space-between'>
                <Skeleton
                    variant="text"
                    width={180}
                    height={13}
                    animation="wave"
                    sx={{ bgcolor: 'rgba(97, 82, 82, 0.452)' }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    height={13}
                    width={140}
                    sx={{ bgcolor: 'rgba(97, 82, 82, 0.452)' }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    height={13}
                    width={140}
                    sx={{ bgcolor: 'rgba(97, 82, 82, 0.452)' }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    height={13}
                    sx={{ bgcolor: 'rgba(97, 82, 82, 0.452)' }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    height={13}
                    width={140}
                    sx={{ bgcolor: 'rgba(97, 82, 82, 0.452)' }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    height={13}
                    sx={{ bgcolor: 'rgba(97, 82, 82, 0.452)' }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    height={13}
                    sx={{ bgcolor: 'rgba(97, 82, 82, 0.452)' }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    height={13}
                    width={140}
                    sx={{ bgcolor: 'rgba(97, 82, 82, 0.452)' }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    height={13}
                    sx={{ bgcolor: 'rgba(97, 82, 82, 0.452)' }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    height={13}
                    width={140}
                    sx={{ bgcolor: 'rgba(97, 82, 82, 0.452)' }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    height={13}
                    sx={{ bgcolor: 'rgba(97, 82, 82, 0.452)' }}
                />
            </Stack>
        </Stack>
    );
}