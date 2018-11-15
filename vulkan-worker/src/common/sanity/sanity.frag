#version 400

// Copyright 2018 The GraphicsFuzz Project Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

layout (location = 0) out vec4 outColor;

void main() {
  outColor = vec4(0.0f, 0.0f, 1.0f, 1.0f);
  if (gl_FragCoord.x < 100.0f) {
    outColor.x = 0.42f;
  }
  if (gl_FragCoord.y < 100.0f) {
    outColor.y = 0.42f;
  }
}
