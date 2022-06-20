import React from 'react';
import { Box } from '@chakra-ui/react';
import ProjectTitle from '@components/project/ProjectTitle';
import ProjectDescription from '@components/project/ProjectDescription';
import ProjectTags from '@components/project/ProjectTags';
import ProjectButtons from '@components/project/ProjectButtons';
import ProjectPreview from '@components/project/ProjectPreview';

const Project = ({ title, description, tags, image, linkRepo, linkDemo }) => {
  return (
    <Box
      marginTop='10px'
      display='flex'
      w='100%'
      justifyContent='space-between'
      gap={{ md: '60px' }}
      zIndex={1}
      position='relative'
      _before={{
        content: '""',
        position: 'absolute',
        bgImage: image,
        bgSize: { base: 'cover!important', md: '0' },
        bgPosition: 'center',
        bgRepeat: 'no-repeat',
        w: { base: '100%', md: '0' },
        h: { base: '100%', md: '0' },
        opacity: { base: 0.2, md: 0 },
        zIndex: -1
      }}
    >
      <Box
        display='flex'
        flexDir='column'
        gap='30px'
        zIndex={2}
      >
        <ProjectTitle
          title={title}
          linkDemo={linkDemo}
        />

        <ProjectDescription
          description={description}
        />

        <ProjectTags
          tags={tags}
        />

        <ProjectButtons
          linkRepo={linkRepo}
          linkDemo={linkDemo}
        />
      </Box>

      <ProjectPreview
        linkDemo='http://nexus.waldemarperalta.com'
        image={image}
      />
    </Box>
  );
};

export default Project;
