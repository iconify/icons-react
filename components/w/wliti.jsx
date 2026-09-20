import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee8z-20zw.css';
import '../../css/m/m-327hb7l.css';
import '../../css/q/qpyv20i8g.css';
import '../../css/l/ljqckqbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee8z-20zw"/><path class="m-327hb7l"/><path class="qpyv20i8g"/><path class="ljqckqbpx"/>`,
		"fallback": "token:wliti",
	});
}

export default Component;
