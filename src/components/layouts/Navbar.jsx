import React from 'react'
import { NavBarContainer, NavBarLinkContainer, NavBarLink, ButtonLink, ExtendedNavBar, NavBarLinkExtended } from "../../styles/NavBarStyled";
import { useState, useEffect, } from "react";
import { useLocation } from "react-router-dom";


function NavBar() {
  const [extendNavBar, setExtendNavBar] = useState(false)

  const location = useLocation()
  useEffect(() => {
    setExtendNavBar(false)
  }, [location]
  )

  return (
    <NavBarContainer>
      <NavBarLinkContainer extend={extendNavBar}>
        <NavBarLink
          className="nav-link active"
          to="/">Home
        </NavBarLink>
        <NavBarLink
          className="nav-link"
          to="/games/ducks">Ducks
        </NavBarLink>
        <NavBarLink
          className="nav-link"
          to="/games/tic-tac-toe">TicTacToe
        </NavBarLink>
        <NavBarLink
          className="nav-link"
          to="/games/99-bottles">99 Bottles
        </NavBarLink>
        <NavBarLink
          className="nav-link"
          to="/apps/roman-numbers">Roman Numbers
        </NavBarLink>
        <NavBarLink
          className="nav-link"
          to="/about">About
        </NavBarLink>
        <ButtonLink
          onClick={() => { setExtendNavBar(current => !current) }}>
          {
            extendNavBar ?
              <>
                &#10005;
              </> : <>
                &#8801;
              </>
          }
        </ButtonLink>
      </NavBarLinkContainer>
      {extendNavBar && (
        <ExtendedNavBar>
          <NavBarLinkExtended
            className="nav-link active"
            to="/">Home
          </NavBarLinkExtended>
          <NavBarLinkExtended
            className="nav-link"
            to="/games/ducks">Ducks
          </NavBarLinkExtended>
          <NavBarLinkExtended
            className="nav-link"
            to="/games/tic-tac-toe">TicTacToe
          </NavBarLinkExtended>
          <NavBarLinkExtended
            className="nav-link"
            to="/games/99-bottles">99 Bottles
          </NavBarLinkExtended>
          <NavBarLinkExtended
            className="nav-link"
            to="/apps/roman-numbers">Roman Numbers
          </NavBarLinkExtended>
          <NavBarLinkExtended
            className="nav-link"
            to="/about">About
          </NavBarLinkExtended>
        </ExtendedNavBar>
      )
      }

    </NavBarContainer >
  )
}

export default NavBar;