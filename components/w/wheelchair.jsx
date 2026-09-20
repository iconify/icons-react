import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/an0f3mbmg.css';
import '../../css/f/fww4hccrk.css';
import '../../css/l/l1icp4d8i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="an0f3mbmg"/><path class="fww4hccrk"/><path class="l1icp4d8i"/></g>`,
		"fallback": "streamline:wheelchair",
	});
}

export default Component;
