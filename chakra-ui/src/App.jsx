import { useState } from 'react'
import './App.css'
import { Stack, Text, Input, Select } from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Stack
    padding="32px"
    justify="flex-start"
    align="flex-start"
    spacing="15px"
    overflow="hidden"
    background="#FFFFFF"
  >
    <Text
      fontFamily="Open Sans"
      lineHeight="1.2"
      fontWeight="light"
      fontSize="40px"
      color="#000000"
    >
      Profile
    </Text>
    <Stack
      direction="row"
      justify="flex-start"
      align="flex-start"
      spacing="31px"
      background="White"
    >
      <Text
        fontFamily="Open Sans"
        lineHeight="1.33"
        fontWeight="light"
        fontSize="24px"
        color="Black"
        width="232px"
      >
        Basics / Personal
      </Text>
      <Stack justify="flex-start" align="flex-start" spacing="32px">
        <Stack
          justify="flex-start"
          align="flex-start"
          spacing="4px"
          overflow="hidden"
          width="760px"
          maxWidth="100%"
        >
          <Text
            fontFamily="Open Sans"
            lineHeight="1.33"
            fontWeight="light"
            fontSize="24px"
            color="#000000"
          >
            Name
          </Text>
          <Stack
            direction="row"
            justify="flex-start"
            align="flex-start"
            overflow="hidden"
            alignSelf="stretch"
          >
            <Stack
              justify="flex-start"
              align="flex-start"
              overflow="hidden"
              flex="1"
            >
              <Text>
                First
              </Text>
              <Input
                placeholder="Placeholder"
                size="xs"
                height="24px"
                alignSelf="stretch"
              />
            </Stack>
            <Stack
              justify="flex-start"
              align="flex-start"
              overflow="hidden"
              width="144px"
            >
              <Text>
                Middle
              </Text>
              <Input
                placeholder="Placeholder"
                size="xs"
                height="24px"
                alignSelf="stretch"
              />
            </Stack>
            <Stack
              justify="flex-start"
              align="flex-start"
              overflow="hidden"
              flex="1"
            >
              <Text>
                Last
              </Text>
              <Input
                placeholder="Placeholder"
                size="xs"
                height="24px"
                alignSelf="stretch"
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack justify="flex-start" align="flex-start" overflow="hidden">
          <Text>
            Date Of Birth
          </Text>
          <Input placeholder="Placeholder" size="xs" />
        </Stack>
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          overflow="hidden"
          alignSelf="stretch"
        >
          <Stack
            justify="flex-start"
            align="flex-start"
            overflow="hidden"
            width="232px"
          >
            <Text>
              Sex
            </Text>
            <Select
              placeholder="Hello"
              size="sm"
              height="24px"
              alignSelf="stretch"
            />
          </Stack>
          <Stack
            justify="flex-start"
            align="flex-start"
            overflow="hidden"
            width="232px"
          >
            <Text>
              Gender
            </Text>
            <Select
              placeholder="Hello"
              size="sm"
              height="24px"
              alignSelf="stretch"
            />
          </Stack>
          <Stack
            justify="flex-start"
            align="flex-start"
            overflow="hidden"
            width="232px"
          >
            <Text>
              Pronouns
            </Text>
            <Select
              placeholder="Hello"
              size="sm"
              height="24px"
              alignSelf="stretch"
            />
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          overflow="hidden"
        >
          <Stack
            justify="flex-start"
            align="flex-start"
            overflow="hidden"
            width="232px"
          >
            <Text>
              Race
            </Text>
            <Select
              placeholder="Hello"
              size="sm"
              height="24px"
              alignSelf="stretch"
            />
          </Stack>
          <Stack
            justify="flex-start"
            align="flex-start"
            overflow="hidden"
            width="232px"
          >
            <Text>
              Ethnicity
            </Text>
            <Select
              placeholder="Hello"
              size="sm"
              height="24px"
              alignSelf="stretch"
            />
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          overflow="hidden"
        >
          <Stack
            justify="flex-start"
            align="flex-start"
            overflow="hidden"
            width="232px"
          >
            <Text>
              Preferred Spoken Language
            </Text>
            <Select
              placeholder="Hello"
              size="sm"
              height="24px"
              alignSelf="stretch"
            />
          </Stack>
          <Stack
            justify="flex-start"
            align="flex-start"
            overflow="hidden"
            width="232px"
          >
            <Text>
              Preferred Written Language
            </Text>
            <Select
              placeholder="Hello"
              size="sm"
              height="24px"
              alignSelf="stretch"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
  )
}

export default App
