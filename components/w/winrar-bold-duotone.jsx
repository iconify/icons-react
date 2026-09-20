import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9i6b7boc.css';
import '../../css/r/rptuzg1jl.css';
import '../../css/a/aazo5tbzy.css';
import '../../css/n/ni915cc4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9i6b7boc"/><path class="rptuzg1jl"/><path class="aazo5tbzy"/><path clip-rule="evenodd" class="ni915cc4l"/>`,
		"fallback": "solar:winrar-bold-duotone",
	});
}

export default Component;
