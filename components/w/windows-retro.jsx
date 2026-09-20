import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6zx3ebxq.css';
import '../../css/m/m6dwiobbl.css';
import '../../css/h/hg6_p9-hq.css';
import '../../css/x/xklvz3brh.css';
import '../../css/x/xayimbzzp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6zx3ebxq"/><path class="m6dwiobbl"/><path class="hg6_p9-hq"/><path class="xklvz3brh"/><path class="xayimbzzp"/>`,
		"fallback": "selfhst:windows-retro",
	});
}

export default Component;
