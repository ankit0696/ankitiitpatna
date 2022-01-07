import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius='lg'
        mb={6}
        p={3}
        textAlign='center'
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Ankit Kumar
          </Heading>
          <p>IITian / Developer / Designer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign='center'
        >
          <Image
            borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            maxWidth='100px'
            display='inline-block'
            borderRadius='full'
            src='/images/ankit.jpg'
            alt='Profile image'
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          About
        </Heading>
        <Paragraph>
          I am currently persuing my Masters of Technology from Indian Institute
          of Technology, Patna in Mathematics &amp; Computing.I have completed
          my B.Tech from Institute of Engineeing &amp; Management, Kolkata in
          2019.I am a full-stack developer based in Bihar, India with a passion
          for building digital services/stuff.
          {/* <NextLink href='/works/inkdrop'>
            <Link>Inkdrop</Link>
          </NextLink> */}
        </Paragraph>
        {/* <Box align='center' my={4}>
          <NextLink href='/works'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              My portfolio
            </Button>
          </NextLink>
        </Box> */}
      </Section>

      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Bihar, India.
        </BioSection>
        <BioSection>
          <BioYear>2015-2019</BioYear>
          Completed the B.Tech Program in the Computer Science at Institute of
          Engineeing and Management - Kolkata, India
        </BioSection>
        <BioSection>
          <BioYear>2019-2020</BioYear>
          Worked at Tata Consultancy Services, Kolkata
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Masters in Mathemactics & Computing from Indian Institute of
          Technology, Patna (IIT Patna) - Bihar,India
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          I ♥
        </Heading>
        <Paragraph>
          {' '}
          NextJs, Strapi, Node, React, tailwindcss, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href='https://github.com/ankit0696' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @ankit0696
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href='https://www.linkedin.com/in/ankitiitpatna/'
              target='_blank'
            >
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @ankitiitpatna
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href='https://www.youtube.com/devaslife'
            title='Dev as Life'
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href='https://www.inkdrop.app/'
            title='Inkdrop'
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        {/* <Box align='center' my={4}>
          <NextLink href='/posts'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
