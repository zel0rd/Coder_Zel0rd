# 학습정리

DVCS(DIstributed Verion Control Systems)

1. Git 소개

1.1 분산버전관리시스템
- 빠른 속도가 강점인 분산 리비전 관리 또는 소프트웨어 소스 관리 프로젝트
- 리눅스 커널 개발에 사용하기 위해 리눅스 토발즈가 처음 디자인과 개발을 하기 시작
- 모든 Git워킹 디렉터리는 완벽하게 독립적인 저장소로 전체 변경 내역과 모든 리비전 트래킹 능력을 갖추고 있으며, 네트워크 접근이나 중앙 서버에 의존적이지 않다.

1.2 Git 특징
- 전통적인 SVN 설정에서는 버전 관리를 하기 위해서는 여러분의 작성한 코드를 반드시 커밋해야 하고, 이 수정 내용이 다른 사람의 작업을 깨트리거나 문제를 일으키기도 한다.
    -각 개발자가 작업을 진행할 수 있는 자신만의 샌드박스를 가지고 있으며, 작업을 마친 뒤에 변경내역을 마스터 저장소에 올려 보낼 수(push) 있다.
SVN은 모든 디렉터리에 .svn 폴더를 가지고 있어야한다.
- Git은 프로젝트 정보를 저장하기 위해 하나의 디렉터리를 사용하기 때문에 체크아웃 한 루트 디렉터리에 하나의 .git 폴더를 사용하도록 단순화하였다.
    - 이름을 바꾸거나 위치를 이동하는 것으로 파일 내역이 깨지는 일이 없다.
- SVN의 경우 Trunk(주 작업 공간)와 Branch들이 있고 각 브랜치가 소스의 복사본이다.
    - Git에서는 모든 것이 브랜치다. Git에서는 새 브랜치가 아주 빠르게 만들어 지며 브랜치 간의 이동도 빠르게 수행된다. Tag를 만드는 것도 놀라울 정도로 쉽다.

<!-- http://wiki.gurubee.net/pages/viewpage.action?pageId=26739657 -->

# 배경지식

## VCS 버전관리 시스템

소스코드를 관리하는 시스템은 크게 3종류로 나눌 수 있다.
버전관리 시스템 종류를 학습하고, 차이점을 비교해본다

* VCS 로컬 방식 : RCS, SCCS
* CVCS 중앙 서버 방식 : Subversion(SVN), CSV, Perforce, ClearCase, TFS
* DVCS 분산 저장소 방식 : Git, Mercuial, Bitkeeper, SVK, Darcs

## git

- git에서 사용하는 기본적인 용어들을 학습하고 정리한다.
- git 명령을 이용해서 저장소 관리하는 방식을 학습하고 정리한다.
- 변경 사항을 추가,수정,삭제하는 방식에 대해 학습하고 정리한다.
- 참고자료 : http://rogerdudler.github.io/git-guide/index.ko.html

## 용어
다음과 같은 git 관련 용어를 학습하고 의미가 무엇인지, 어떤 동작을 해야하는지 정리

- 저장소 관련
    - remote
    - local
    - init
    - clone

- 상태 관리
    - git repository
    - staging area
    - working directory

- 파일 관련
    - Untracked
    - Unmodified
    - Modified
    - Staged

- 참고자료 : https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%88%98%EC%A0%95%ED%95%98%EA%B3%A0-%EC%A0%80%EC%9E%A5%EC%86%8C%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0