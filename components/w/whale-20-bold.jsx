import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-pqieb8m.css';
import '../../css/h/hijw9tg6y.css';
import '../../css/m/mmgcubc1u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-pqieb8m"/><path class="hijw9tg6y"/><path class="mmgcubc1u"/>`,
		"fallback": "energy-icons:whale-20-bold",
	});
}

export default Component;
