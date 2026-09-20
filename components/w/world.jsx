import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/n/nf9l68beg.css';
import '../../css/w/wdplfeaon.css';
import '../../css/a/a8qw23j_z.css';
import '../../css/x/x6pps9bac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="nf9l68beg"/><path class="wdplfeaon"/><path class="a8qw23j_z"/><path class="x6pps9bac"/></g>`,
		"fallback": "streamline-plump:world",
	});
}

export default Component;
