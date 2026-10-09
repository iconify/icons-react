import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv56ohh-o.css';
import '../../css/j/jf6r4n4lm.css';
import '../../css/b/bcf5uus5m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv56ohh-o"/><path class="jf6r4n4lm"/><path class="bcf5uus5m"/>`,
		"fallback": "energy-icons:yoga-20",
	});
}

export default Component;
