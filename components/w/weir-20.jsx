import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf27qfbet.css';
import '../../css/q/q1h4i7rsw.css';
import '../../css/c/cgb5bcg0o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf27qfbet"/><path class="q1h4i7rsw"/><path class="cgb5bcg0o"/>`,
		"fallback": "energy-icons:weir-20",
	});
}

export default Component;
