import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Character() {
  const {name} = useParams();
  return (
    <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>{`${name}`}</title>
    </Helmet>
    </>
  )
}

export default Character