import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrc4pogtw.css';
import '../../css/y/yof-aacxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrc4pogtw"/><path class="yof-aacxg"/>`,
		"fallback": "pixel:wifi",
	});
}

export default Component;
