// src/infrastructure/ui/components/SearchBar/SearchBar.tsx
import React, { useState } from 'react';
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import styles from './SearchBar.module.scss';
import stylesCustom from '../../../../custom.module.scss';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query.trim());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (!newQuery.trim()) {
      onSearch('');
    }
  };

  return (
    <Form onSubmit={handleSearch} className={styles.searchBar}>
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Buscar curso o clase"
          className="mr-sm-2"
          value={query}
          onChange={handleChange}
        />
        <Button type="submit" className={stylesCustom.showHideButton} disabled={!query.trim()}>
          Buscar
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
