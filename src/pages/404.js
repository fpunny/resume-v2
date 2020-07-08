import { useEffect } from 'react';
import { navigate } from "gatsby"

export default function () {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
}
