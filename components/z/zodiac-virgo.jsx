import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zpfwl9bxb.css';
import '../../css/u/u3ylivble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zpfwl9bxb"/><path class="u3ylivble"/></g>`,
		"fallback": "hugeicons:zodiac-virgo",
	});
}

export default Component;
