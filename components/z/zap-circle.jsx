import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zwev9ibod.css';
import '../../css/i/il8nojxoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zwev9ibod"/><path class="il8nojxoe"/></g>`,
		"fallback": "mage:zap-circle",
	});
}

export default Component;
