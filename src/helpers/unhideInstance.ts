import {
    Container,
    Filter,
} from 'pixi.js';

import type { HostConfig } from '../typedefs/HostConfig.ts';

export function unhideInstance(
    instance: HostConfig['instance'],
)
{
    if (instance instanceof Container)
    {
        (instance as HostConfig['containerInstance']).visible = true;
    }
    else if (instance instanceof Filter)
    {
        (instance as HostConfig['filterInstance']).enabled = true;
    }
}
