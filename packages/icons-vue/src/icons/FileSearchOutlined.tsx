// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileSearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSearchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileSearchOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileSearchOutlinedSvg}></AntdIcon>;
};

FileSearchOutlined.displayName = 'FileSearchOutlined';
FileSearchOutlined.inheritAttrs = false;
export default FileSearchOutlined;