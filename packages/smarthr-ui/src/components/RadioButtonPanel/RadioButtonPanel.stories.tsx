import { StoryFn } from '@storybook/react'
import React, { ChangeEvent, useState } from 'react'

import { Fieldset } from '../Fieldset'
import { Cluster, Stack } from '../Layout'
import { StatusLabel } from '../StatusLabel'
import { Text } from '../Text'

import { RadioButtonPanel } from './RadioButtonPanel'

export default {
  title: 'Forms（フォーム）/RadioButtonPanel',
  component: RadioButtonPanel,
}

export const All: StoryFn = () => {
  const [checkedName, setCheckedName] = useState<string | null>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setCheckedName(e.currentTarget.name)

  return (
    <Stack as="ul" gap={2}>
      <li>
        <Fieldset title="標準的な使い方" titleType="blockTitle">
          <Stack as="ul" gap={0.5} className="shr-ps-[unset]">
            <RadioButtonPanel
              as="li"
              name="1"
              checked={checkedName === '1'}
              onChange={handleChange}
            >
              何らかの選択肢
            </RadioButtonPanel>

            <RadioButtonPanel
              as="li"
              name="2"
              checked={checkedName === '2'}
              disabled
              onChange={handleChange}
            >
              disabled な選択肢
            </RadioButtonPanel>
          </Stack>
        </Fieldset>
      </li>
      <li>
        <Fieldset title="複数のテキストを含む場合" titleType="blockTitle">
          <ul className="shr-ps-[unset]">
            <RadioButtonPanel
              as="li"
              name="5"
              checked={checkedName === '5'}
              onChange={handleChange}
            >
              <Stack gap={0.25} as="span">
                <Cluster align="center" as="span">
                  <Text as="span" size="M" weight="bold">
                    エンゲージメントサーベイ
                  </Text>
                  <StatusLabel>組織改善</StatusLabel>
                </Cluster>
                <Text>
                  従業員の会社に対する愛着や一体感、仕事に対する活力の高さを調査できます。
                </Text>
              </Stack>
            </RadioButtonPanel>
          </ul>
        </Fieldset>
      </li>
    </Stack>
  )
}
