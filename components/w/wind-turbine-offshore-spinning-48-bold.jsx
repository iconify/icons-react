import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g57js3knb.css';
import '../../css/j/j5yt-usot.css';
import '../../css/g/gva-87b1l.css';
import '../../css/n/n4rdx-b-t.css';
import '../../css/l/lrjt8__gh.css';
import '../../css/r/r1ik8hbhd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g57js3knb"/><path class="j5yt-usot"/><path class="gva-87b1l"/><path class="n4rdx-b-t"/><path class="lrjt8__gh"/><path class="r1ik8hbhd"/>`,
		"fallback": "energy-icons:wind-turbine-offshore-spinning-48-bold",
	});
}

export default Component;
