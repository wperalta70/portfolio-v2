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
      display='flex'
      w='100%'
      justifyContent='space-between'
      gap={{ md: '60px' }}
      zIndex={1}
      position='relative'
      _before={{
        display: { base: 'block', md: 'none' },
        content: '""',
        position: 'absolute',
        bgImage: image,
        bgSize: 'cover',
        bgPosition: 'center',
        bgRepeat: 'no-repeat',
        w: '100%',
        h: '100%',
        opacity: 0.2,
        zIndex: -1,
        padding: '100px'
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
