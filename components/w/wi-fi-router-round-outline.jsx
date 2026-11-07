import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q33ngubua.css';
import '../../css/i/i2chtjarf.css';
import '../../css/r/rdhphbcfw.css';
import '../../css/u/upn7tpbmc.css';
import '../../css/b/bjnn66bdm.css';
import '../../css/r/r1d2zdbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q33ngubua"/><path clip-rule="evenodd" class="i2chtjarf"/><path class="rdhphbcfw"/><path clip-rule="evenodd" class="upn7tpbmc"/><path class="bjnn66bdm"/><path class="r1d2zdbnd"/>`,
		"fallback": "solar:wi-fi-router-round-outline",
	});
}

export default Component;
