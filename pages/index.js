import React from 'react';
import { Box } from '../src/components/Box';
import { MainGrid } from '../src/components/MainGrid';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/libs/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

// eslint-disable-next-line react/prop-types
function ProfileSidebar({ githubUser }) {
  return (
    <Box>
      <img alt="profile" src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  );
}
export default function Home() {
  const user = 'jotaemecortat';

  const favoriteUsers = [
    'carlafrimer',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div>
          <Box className="profileArea" style={{ gridArea: 'profileArea' }}>
            <ProfileSidebar githubUser={user} />
          </Box>
        </div>

        <div>
          <Box className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade (
              {favoriteUsers.length}
              )
            </h2>

            <ul>
              {favoriteUsers.map((users) => (
                <li>
                  <a href={`/users/${users}`} key={users}>
                    <img alt="profile" src={`https://github.com/${users}.png`} />
                    <span>{users}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
