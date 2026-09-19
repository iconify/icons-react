import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg4rycc9o.css';
import '../../css/q/qfttfgb8q.css';
import '../../css/d/djyvkb6-g.css';
import '../../css/f/frp7jbb5h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg4rycc9o"/><path class="qfttfgb8q"/><path class="djyvkb6-g"/><path class="frp7jbb5h"/>`,
		"fallback": "devicon:yii",
	});
}

export default Component;
