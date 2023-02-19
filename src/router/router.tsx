import * as Pages from '@app/pages';
import { cluesService } from '@libs/api';
import { useAuth } from '@libs/auth';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import ErrorFallback from './error-fallback';
import NotFound from './not-found';

export default function Router() {
  const auth = useAuth();

  const queryClues = useQuery(['clues'], () => {
    return cluesService.findAll().then((r) => r.data);
  });

  if (auth.authorizing || queryClues.isInitialLoading) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  const isLogged = !!auth.user;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Routes>
          {isLogged ? (
            <>
              <Route path="/" element={<Pages.Home />} />
              <Route path="/settings" element={<Pages.Home />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Pages.Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
