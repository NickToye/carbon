import React from 'react';
import { NavLink } from 'react-router-dom';
import common from '../../styles/common/common.scss';

const Header = () => (
  <div className="u-sticky-top">
    <header className={common.Header}>
      <nav>
        <ul className="o-list-inline  u-margin-none">
          <li className="o-list-inline__item"><NavLink to='/atoms' activeClassName="active" className="u-padding-small">Atoms</NavLink></li>
          <li className="o-list-inline__item"><NavLink to='/molecules' className="u-padding-small">Molecules</NavLink></li>
          <li className="o-list-inline__item"><NavLink to='/organisms' className="u-padding-small">Organisms</NavLink></li>
          <li className="o-list-inline__item"><NavLink to='/templates' className="u-padding-small">Templates</NavLink></li>
          <li className="o-list-inline__item"><NavLink to='/pages' className="u-padding-small">Pages</NavLink></li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;